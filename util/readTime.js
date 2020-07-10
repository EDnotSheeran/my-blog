/**
 * @EDnotSheeran
 *
 * @param {String} text
 * @returns     
 */
function readTime(text, raw = true) {
    const wordsPerMinute = 200; // Average case.
    let result;
    
    let textLength = text.split(' ').length; // Split by words
    if(textLength > 0){
      let value = Math.ceil(textLength / wordsPerMinute);
      result = raw ? value : `~${value} min read`;
    }

    return result
}
export default readTime
