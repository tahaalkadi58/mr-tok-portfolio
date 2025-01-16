export async function fetchRepo(
  owner: string,
  perPage: number = 5,
): Promise<any | null> {
  try {
    // إضافة ?per_page=<number> لتحديد عدد النتائج
    const url = `https://api.github.com/users/${owner}/repos?per_page=${perPage}`;
    const reposResponse = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!reposResponse.ok) {
      throw new Error(`Error fetching repositories: ${reposResponse.status}`);
    }

    const repos = (await reposResponse.json()) as any;
    return repos;
  } catch (error) {
    console.error("Failed in fetching the repos!", error);
    return null; // إرجاع null بدلاً من undefined في حالة الخطأ
  }
}

async function fetchAllRepoLanguages(
  repos: any,
  owner: string,
): Promise<Record<string, number> | null> {
  let allLanguages: Record<string, number> = {};

  try {
    // استرجاع جميع الـ repositories الخاصة بالمستخدم
    if (!repos) {
      throw new Error("No repositories found");
    }

    // استدعاء بيانات اللغات لكل repository باستخدام Promise.all
    const languagesPromises = repos.map(async (repo: { name: string }) => {
      const languagesData = await fetchRepoLanguages(owner, repo.name);
      // دمج بيانات اللغات لكل repository
      Object.entries(languagesData).forEach(([language, size]) => {
        if (allLanguages[language]) {
          allLanguages[language] += size;
        } else {
          allLanguages[language] = size;
        }
      });
    });

    // انتظار جميع الـ promises للانتهاء
    await Promise.all(languagesPromises);

    return allLanguages;
  } catch (error) {
    console.error("Failed to fetch languages for all repositories:", error);
    return null; // إرجاع null بدلاً من كائن فارغ في حالة الخطأ
  }
}

async function fetchRepoLanguages(
  owner: string,
  repo: string,
): Promise<Record<string, number>> {
  const url = `https://api.github.com/repos/${owner}/${repo}/languages`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = (await response.json()) as Record<string, number>;
    return data;
  } catch (error) {
    console.error("Failed to fetch languages:", error);
    return {}; // إرجاع كائن فارغ عند حدوث خطأ
  }
}

export default fetchAllRepoLanguages;
