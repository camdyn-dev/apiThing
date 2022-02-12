# projectAPI

Hey!

This is a super basic API that gives you a programming project upon query. I was originally planning on fleshing it out quite a bit, but decided to stop (for now) as I'm not sure what's the best way to add projects in, and I didn't really want to do them by hand, one by one. Here's the basics of how it works.


> /project/?any

Return a project of any type, any level and any language


>/project/?type=(x)

Return a project of a specified type.
Current types are; webdev, regex, api


>/project/?level=(x)

Return a project of a specified level.
Current levels are; beginner, intermediate, advanced


>/project/?lang=(x)

Return a project for a specific language.
Current languages are; javascript, python


The above parameters can be combined to get a more specific result, for example;
>/project/?type=webdev&lang=python

will return a web development project in python (like building an e-commerce site with Django)

or

>/project/?lang=python&level=intermediate

which will return an intermediate python project


The current limit is 25 requests per IP every 15 minutes.


Thanks for checking it out! I might eventually flesh this out into a bigger project with a website, but for now, it'll be on the backburner.
-Camdyn
