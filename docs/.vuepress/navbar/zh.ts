import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "好书推荐", icon: "discover", link: "/category/book/" },
  {
    text: "分类",
    icon: "edit",
    prefix: "/category",
    children: [
      {
        text: "sql",
        icon: "edit",
        link: "/sql/"
      },
      {
        text: "java",
        icon: "edit",
        link: "/java/"
        // prefix: "banana/",
        // children: [
        //   {
        //     text: "香蕉 1",
        //     icon: "edit",
        //     link: "1",
        //   },
        //   {
        //     text: "香蕉 2",
        //     icon: "edit",
        //     link: "2",
        //   },
        //   "3",
        //   "4",
        // ],
      },
      { text: "spring boot", icon: "edit", link: "/springboot/" },
      { text: "golang", icon: "edit", link: "/golang/" },
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "标签",
    icon: "edit",
    prefix: "/tag",
    children: [
      {
        text: "sql",
        icon: "edit",
        link: "/sql/"
      },
      {
        text: "java",
        icon: "edit",
        link: "/java/"
        // prefix: "banana/",
        // children: [
        //   {
        //     text: "香蕉 1",
        //     icon: "edit",
        //     link: "1",
        //   },
        //   {
        //     text: "香蕉 2",
        //     icon: "edit",
        //     link: "2",
        //   },
        //   "3",
        //   "4",
        // ],
      },
      { text: "spring boot", icon: "edit", link: "/springboot/" },
      { text: "golang", icon: "edit", link: "/golang/" },
      // "tomato",
      // "strawberry",
    ],
  },
  {
    text: "向左向右",
    icon: "note",
    link: "https://autre.cn",
  },
]);
