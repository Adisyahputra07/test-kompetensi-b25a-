const duplicateAlphabets = (string) => {
  input = string.split("");

  let [...tes] = new Set(input);
  let result = tes.toString();

  console.log(result);
};

duplicateAlphabets("alagcgcdodol");
