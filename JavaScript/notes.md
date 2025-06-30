**api == url**

1. public api
2. internal api => company api
3. partner api  => an api made by serval apis exp- payment gateway
4. composite api => integate multiple api (third party api)

get => get data from db
post => insert data from db
put => update data from db
patch => update single data from db
delete => delete data from the db

curd oprations => create, update, read, delete 


🔁 **PUT**
Replaces the entire thing.

You send the full data — not just the changes.

Think of it like replacing a whole document.

📝 Example:
You have a profile with name, email, and phone.
If you use PUT, you must send all three fields — even if you're just changing the phone.

🔧 **PATCH**
Updates only part of it.

You send only what you want to change.

Think of it like editing just one part of a document.

📝 Example:
You want to update just your phone number.
With PATCH, you send only the phone number — nothing else.

**Summary Table:**
**Feature	                        PUT	                             PATCH**
Replaces or updates?	Replaces whole resource	        Updates part of resource
Data required	              Full data	                Only changed fields
Use case	                Full update                 	Partial update


**when we hit api** -----

url
body
headers
methods 

ye sb pass hote he 

**api response** :- 
status code
headers
body

**errors**
200
201

400
401
403
404

500
