from bs4 import BeautifulSoup
import requests

url = 'https://wobexes.com/2022/08/31/the-best-xbox-gaming-headsets-in-2022/'
result = requests.get(url)
doc = BeautifulSoup(result.text, 'html.parser')
print(doc.prettify())