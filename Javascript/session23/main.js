const data = [
  {
    postId: 1,
    id: 1,
    title: "fugiat veniam minus sdftyum  yjhj ghfd",
    email: "saqq2f@swfafd.ddcom",
    body: "sdfdsfsdf hudsffdgdfg fgfdgfjkdshgfj-dsfg hdfkjdhsf fdsfsdf",
  },
  {
    postId: 1,
    id: 2,
    title: "fugiat veniam minus dsfd df",
    email: "sdsfgs12432@sagfd.ddcom",
    body: "sdfdsfsdf  kjdsfrer3q4yhkjsd hdfkjdhsf fdsfsdf",
  },
  {
    postId: 1,
    id: 3,
    name: "fugiat veniam minuss",
    email: "dfsatee5563@savfsfd.ddcom",
    body: "sdfdsfsdf hudsfjkdshgfj kjdsfh21321h rtertkjsd hdfkqrewferewrjdhsf fdsfsdf",
  },
];

const [, , user3] = data;
const {id, name, email} = user3;
const splitedName = name.split(" ")
const string = `Hi ${splitedName[0]}, Your email is ${email} and your ID is ${id}`;
console.log(string);