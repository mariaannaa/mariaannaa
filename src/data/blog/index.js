import blog1 from "./blog1";
import blog2 from "./blog2";
import blog3 from "./blog3";
import blog4 from "./blog4";
import blog5 from "./blog5";
import blog6 from "./blog6";
import blog7 from "./blog7";


export const blogPosts = [blog1, blog2, blog3, blog4, blog5, blog6, blog7].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);