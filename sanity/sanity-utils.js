import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getHomeData() {
  return createClient(clientConfig).fetch(
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
      industry[]{
        industryTitle,
        "industryImage": industryImage.asset->url
      }
    }`
  );
}

export async function getAboutData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "about"]{
      _id,
      _createdAt,
      aboutTitle,
      aboutDesc,
      "aboutImage": aboutImage.asset->url,
      ourStory,
      storyDesc,
    }`
  );
}

export async function getPartnersData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "partners"]{
      _id,
      _createdAt,
      title,
     description,
     partners[]{
      title,
      "image": image.asset->url,
      description,},
      supportText,
      support[]{
        supportTitle,
        supportDescription,
        time,
        contact,
        email,
        "supportImage": supportImage.asset->url
      }

      ,
    }`
  );
}

export async function getCareersData() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "careers"]{
      _id,
      _createdAt,
      jobTitle,
      description,
    }`
  );
}

export async function getServices() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "services"]{
      _id,
      _createdAt,
      serviceTitle,
      "slug": slug.current,
      "image": image.asset->url,
      serviceDesc,
      "thumbImage": thumbImage.asset->url,
      blockText
    }`
  );
}

export async function getServicesData(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "services" && slug.current == $slug][0]{
      _id,
      _createdAt,
      serviceTitle,
      "slug": slug.current,
      "image": image.asset->url,
      serviceDesc,
      "thumbImage": thumbImage.asset->url,
      blockText
    }`,
    { slug }
  )
}




