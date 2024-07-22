import json, os

POST_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data')
POST_FILE_1 = os.path.join(POST_DIR, 'posts.json')
POST_FILE_2 = os.path.join(POST_DIR, 'posts_2.json')


print(POST_FILE_1)
with open(POST_FILE_1, encoding="utf-8") as file:
    posts = json.load(file)
    print(posts[0]['id'])