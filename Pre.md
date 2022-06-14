---
presentation:
  ## theme: none.css
  mouseWheel: true
  ## width: 1000
  ## height: 900
---

<!-- slide -->
# Lab2 Douban

<!-- slide -->
## Requirement:

1. text info in json format 
2. images

<!-- slide -->
First, as a human being, 
I decide to go through the 
procedure myself.

<!-- slide -->
-- 1. ping the homepage of Douban

<!-- slide -->
-- 2. click and find top 250

<!-- slide -->
-- 3. 100 pages -- 25 films per page

<!-- slide -->
-- 4. each film has text info url and image info url
	
	-- open the text url and find the entire text
	
	-- download the image url directly

<!-- slide -->
-- 5. dump all the info and save the images

<!-- slide -->
Therefore, we know how the procedure works:

<!-- slide -->
-- 1. home page -> find the top 250

<!-- slide -->
-- 2. top 250 -> find all the pages

<!-- slide -->
-- 3. pages -> find all the movies

<!-- slide -->
-- 4. movies -> find all the text info urls and image info urls

<!-- slide -->
-- 5. text info -> open the text url, find all the text info and load by json

<!-- slide -->
-- 6. image info -> download directly according to the image url

<!-- slide -->
-- 7. save the required obejcts

<!-- slide -->
Finally, implement details