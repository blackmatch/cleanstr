
const isValidStr = (str) => {
  return typeof (str) === 'string' && str.length > 0;
};

const specialChars = '\u0008-\u000D'
  + '\u0020\u0022\u0027\u005C\u00A0\u2028\u2029\uFEFF';
const zeroChars = '\u200B-\u200D\uFEFF';

const cleanUsePattern = (str, patternStr) => {
  const regx = new RegExp(patternStr, 'ig');
  return str.replace(regx, '');
};

const cleanFun = function(str) {
  if (isValidStr(str)) {
    const pat = '[' + specialChars + ']';
    return cleanUsePattern(str, pat);
  } else {
    return str;
  }
};

const cleanZeroFun = function(str) {
  if (isValidStr(str)) {
     const pat = '[' + zeroChars + ']';
    return cleanUsePattern(str, pat);
  } else {
    return str;
  }
};

const cleanAllFun = function(str) {
  if (isValidStr(str)) {
    const pat = '[' + specialChars + zeroChars + ']';
    return cleanUsePattern(str, pat);
  } else {
    return str;
  }
};

const cleanCostomFun = function(str, patStr) {
  if (isValidStr(str) && isValidStr(patStr)) {
    const pat = '[' + patStr + ']';
    return cleanUsePattern(str, pat);
  } else {
    return str;
  }
};

const Cleaner = {
  clean: cleanFun,
  cleanZero: cleanZeroFun,
  cleanAll: cleanAllFun,
  cleanCustom: cleanCostomFun,
};

module.exports = Cleaner;
