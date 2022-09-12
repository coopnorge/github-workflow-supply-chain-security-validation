const enryCodeQLMapping = {
  'c#': 'csharp'
};
function getCodeQLLanguage(enryLang) {
  if (enryLang in enryCodeQLMapping) {
    return enryCodeQLMapping[enryLang];
  }
  return enryLang;
}
const detectedLanguages = 'C#,Dockerfile'.toLowerCase().split(',').map(language => {
  return getCodeQLLanguage(language)
});
const codeqlLanguages = ['cpp', 'csharp', 'go', 'ruby', 'python', 'java', 'javascript', 'typescript'];
const languages = detectedLanguages.filter(language => codeqlLanguages.includes(language));
console.log(languages.join(','));
