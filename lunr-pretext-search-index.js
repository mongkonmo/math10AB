var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " 2023  copyright  "
},
{
  "id": "sec-counting-intro",
  "level": "1",
  "url": "sec-counting-intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Counting",
  "body": " Introduction to Counting   It may seem silly at first to have an entire chapter dedicated to the topic of counting at this stage of your mathematical development. After all, how hard could it be?    Let's consider a few \"counting problems\" to get a better sense of what may actually be involved in this seemingly simple task of counting.   How many squares are in the figure below?   An arrangement of squares of various sizes.       We can enumerate the individual squares as shown below and see that there are five squares.   Enumerating the five squares in Figure         How many dots are in the figure below?   An arrangement of dots.       subitize  While we could also approach this question by enumerating the individual dots, another approach uses a concept called subitizing . This particular arrangement of dots is common and familiar to anyone who has played games that involve rolling a die. So we recognize this particular arrangement of dots and associate it with prior knowledge that there are five dots.   Tommy has 4 pants and 6 shirts. How many different outfits can he make from these?  Since an outfit consists of a pants and a shirt, we need to count the number of ways we can pair each pants with each shirt. This gives us possible outfits.    As we can see from these problems, there are various counting strategies that can be applied depending on the situation. This chapter will introduce four fundamental strategies for counting:   The Addition Principole of Counting  The Multiplication Principle of Counting  The Rearrangement Principle of Counting  The Labelling Principle of Counting     "
},
{
  "id": "investigation-1",
  "level": "2",
  "url": "sec-counting-intro.html#investigation-1",
  "type": "Investigation",
  "number": "1.1.1",
  "title": "",
  "body": " Let's consider a few \"counting problems\" to get a better sense of what may actually be involved in this seemingly simple task of counting.   How many squares are in the figure below?   An arrangement of squares of various sizes.       We can enumerate the individual squares as shown below and see that there are five squares.   Enumerating the five squares in Figure         How many dots are in the figure below?   An arrangement of dots.       subitize  While we could also approach this question by enumerating the individual dots, another approach uses a concept called subitizing . This particular arrangement of dots is common and familiar to anyone who has played games that involve rolling a die. So we recognize this particular arrangement of dots and associate it with prior knowledge that there are five dots.   Tommy has 4 pants and 6 shirts. How many different outfits can he make from these?  Since an outfit consists of a pants and a shirt, we need to count the number of ways we can pair each pants with each shirt. This gives us possible outfits.    As we can see from these problems, there are various counting strategies that can be applied depending on the situation. This chapter will introduce four fundamental strategies for counting:   The Addition Principole of Counting  The Multiplication Principle of Counting  The Rearrangement Principle of Counting  The Labelling Principle of Counting    "
},
{
  "id": "sec-counting-add-multiply",
  "level": "1",
  "url": "sec-counting-add-multiply.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Addition and Multiplication Principles of Counting",
  "body": " The Addition and Multiplication Principles of Counting    Understand when and how to use the Addition Principle of Counting  Understand when and how to use the Multiplication Principle of Counting    "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-counting-add-multiply.html#objectives-1",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  Understand when and how to use the Addition Principle of Counting  Understand when and how to use the Multiplication Principle of Counting   "
},
{
  "id": "sec-counting-rearrangement",
  "level": "1",
  "url": "sec-counting-rearrangement.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Rearrangement Principle of Counting",
  "body": " The Rearrangement Principle of Counting     Understand when and how to use the Rearrangement Principle of Counting    "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "sec-counting-rearrangement.html#objectives-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  Understand when and how to use the Rearrangement Principle of Counting   "
},
{
  "id": "sec-counting-labeling",
  "level": "1",
  "url": "sec-counting-labeling.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Labeling Principle of Counting",
  "body": " The Labeling Principle of Counting    Understand when and how to use the Labeling Principle of Counting    "
},
{
  "id": "objectives-3",
  "level": "2",
  "url": "sec-counting-labeling.html#objectives-3",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  Understand when and how to use the Labeling Principle of Counting   "
},
{
  "id": "sec-counting-combine-principles",
  "level": "1",
  "url": "sec-counting-combine-principles.html",
  "type": "Section",
  "number": "1.5",
  "title": "Combining Principles of Counting",
  "body": " Combining Principles of Counting    Solve counting problems that involve using multiple principles of counting    "
},
{
  "id": "objectives-4",
  "level": "2",
  "url": "sec-counting-combine-principles.html#objectives-4",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  Solve counting problems that involve using multiple principles of counting   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
