import { createClient, groq } from "next-sanity";

export async function getData() {

  const client = createClient({
    projectId: "jh3jibfq",
    dataset: "production",
    apiVersion: "2023-06-10",
  });

  return client.fetch(
    groq`*[_type == "home"]{
        _id,
        _createdAt,
        bannerHead,
        bannerTag,
        bannerDescription,
        sectionDesc,
        whyLuminosa,
        "whyImage": whyImage.asset->url,
        whyLuminosaDesc,
        industry[]{industryTitle, "industryImage": industryImage.asset->url},
    }`
  );
}
