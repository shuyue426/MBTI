/*
 * @Author: shuyue426 yanbing26@163.com
 * @Date: 2023-05-28 20:23:57
 * @LastEditors: shuyue426 yanbing26@163.com
 * @LastEditTime: 2023-05-28 23:34:28
 * @FilePath: /MBTI/lib/sanity/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const useCdn = process.env.NODE_ENV === "production";
// export const useCdn = false;

/**
 * As this file is reused in several other files, try to keep it lean and small.
 * Importing other npm packages here could lead to needlessly increasing the client bundle size, or end up in a server-only function that don't need it.
 */

export const projectId = "wf1b1ql1" ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID;

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || ("production" as string);

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-03-25";

// This is the document id used for the preview secret that's stored in your dataset.
// The secret protects against unauthorized access to your draft content and have a lifetime of 60 minutes, to protect against bruteforcing.
export const previewSecretId = process.env
  .SANITY_REVALIDATE_SECRET as string;
