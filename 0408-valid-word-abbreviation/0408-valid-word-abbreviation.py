class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        word_ptr = 0
        abbr_ptr = 0
        
        while word_ptr < len(word) and abbr_ptr < len(abbr):
            if abbr[abbr_ptr].isdigit():
                if abbr[abbr_ptr] == "0":
                    return False
                steps = 0
                while abbr_ptr < len(abbr) and abbr[abbr_ptr].isdigit():
                    steps = (steps * 10) + int(abbr[abbr_ptr])
                    abbr_ptr += 1
                word_ptr += steps
            else:
                if abbr[abbr_ptr] != word[word_ptr]:
                    return False
                abbr_ptr += 1
                word_ptr += 1
        
        
        return word_ptr == len(word) and abbr_ptr == len(abbr)
            
        