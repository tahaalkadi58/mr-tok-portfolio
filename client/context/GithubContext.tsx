import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";

export const RepoContext = createContext<{
  repos: any[];
  loading: boolean;
  error: string;
  setPerPage: (num: number) => void;
}>({
  repos: [],
  loading: true,
  error: "",
  setPerPage: (num) => {},
});

export const RepoProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [perPage, setPerPage] = useState(5);
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const url = `https://api.github.com/users/tahaalkadi58/repos?per_page=${perPage}`;
        const response = await fetch(url, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setRepos(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [perPage]);

  return (
    <RepoContext.Provider
      value={{
        repos,
        loading,
        error: error as string,
        setPerPage(num) {
          setPerPage(num);
        },
      }}
    >
      {children}
    </RepoContext.Provider>
  );
};
