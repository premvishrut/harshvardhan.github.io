import openai
import json
import os

openai.api_key = os.getenv("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")

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a spiritual assistant who gives only one short devotional quote in Hindi about Krishna or bhakti, with author name from known saints."},
        {"role": "user", "content": "Give me one Krishna bhakti quote with author."}
    ]
)

text = response['choices'][0]['message']['content']
quote, author = text.split("—") if "—" in text else (text, "अज्ञात")

with open("quote.json", "w", encoding="utf-8") as f:
    json.dump({"quote": quote.strip(), "author": author.strip()}, f, ensure_ascii=False, indent=2)
