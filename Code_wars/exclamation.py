import re

def remove_end_exclamations(text):
    # Replace one or more exclamations at the end of each word
    return re.sub(r'!+$', '', text)

# For multiple words in a sentence
def clean_sentence(sentence):
    words = sentence.split(' ')
    cleaned_words = [remove_end_exclamations(word) for word in words]
    return ' '.join(cleaned_words)

# Test examples
examples = [
    "Hi!",
    "Hi!!!",
    "!Hi",
    "!Hi!",
    "Hi! Hi!",
    "Hi"
]

for example in examples:
    print(clean_sentence(example))