// let num = 10;
// // console.log(num);
// // console.log(typeof num);

// var firstName = `hello ${num+num}`;
// // var firstName = "hello" + num + num;
// console.log(firstName);
// console.log(typeof firstName);

// let isCheck = true;
// console.log(isCheck);
// console.log(typeof isCheck);

// let firstName = "hello" + 20 + "hello";
// console.log(firstName);

// let middleName = 30 + 20 + "hello" + 20 + 30;
// console.log(middleName);

// let lastName = "hello" + 20 + 20;
// console.log(lastName);

// ----------------------------------------

// const object = {key:"value"};

// console.log(object["key"]);
// console.log(object.key);

// const object = {"first name":"value"};

// console.log(object["first name"]);
// console.log(object.first name);  // it will not work...

// -------------------------------------------------------------
// const object2 = {key:"value"}

// object2["key"] = "hello";

// console.log(object2);
// console.log(object2["key"]);    // ye mutable he mtlb non primitive so we can change values

// const object3 = {key:"value", obj1:{key1:"value1"}};
// console.log(object3["obj1"]["key1"]);


// ------------------------------------------

// const arr = [1,2,3];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let arr = [12,13,14,{key:"value"},[1,2]];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]["key"]);
// console.log(arr[4][0]);
// console.log(arr[4][1]);

// --------------------------------

let object4 = {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": [
        "beauty",
        "mascara"
    ],
    "brand": "Essence",
    "sku": "BEA-ESS-ESS-001",
    "weight": 4,
    "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
    },
    "warrantyInformation": "1 week warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        {
            "rating": 3,
            "comment": "Would not recommend!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        },
        {
            "rating": 4,
            "comment": "Very satisfied!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Lucas Gordon",
            "reviewerEmail": "lucas.gordon@x.dummyjson.com"
        },
        {
            "rating": 5,
            "comment": "Highly impressed!",
            "date": "2025-04-30T09:41:02.053Z",
            "reviewerName": "Eleanor Collins",
            "reviewerEmail": "eleanor.collins@x.dummyjson.com"
        }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 48,
    "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}

console.log(object4["id"]);
console.log(object4["title"]);
console.log(object4["description"]);
console.log(object4["category"]);
console.log(object4["price"]);
console.log(object4["discountPercentage"]);
console.log(object4["rating"]);
console.log(object4["stock"]);
console.log(object4["tags"][0]);
console.log(object4["tags"][1]);
console.log(object4["brand"]);
console.log(object4["sku"]);
console.log(object4["weight"]);
console.log(object4["dimensions"]["width"]);
console.log(object4["dimensions"]["height"]);
console.log(object4["dimensions"]["depth"]);
console.log(object4["warrantyInformation"]);
console.log(object4["shippingInformation"]);
console.log(object4["availabilityStatus"]);
console.log(object4["reviews"][0]["rating"]);
console.log(object4["reviews"][0]["comment"]);
console.log(object4["reviews"][0]["date"]);
console.log(object4["reviews"][0]["reviewerName"]);
console.log(object4["reviews"][0]["reviewerEmail"]);
console.log(object4["reviews"][1]["rating"]);
console.log(object4["reviews"][1]["comment"]);
console.log(object4["reviews"][1]["date"]);
console.log(object4["reviews"][1]["reviewerName"]);
console.log(object4["reviews"][1]["reviewerEmail"]);
console.log(object4["reviews"][2]["rating"]);
console.log(object4["reviews"][2]["comment"]);
console.log(object4["reviews"][2]["date"]);
console.log(object4["reviews"][2]["reviewerName"]);
console.log(object4["reviews"][2]["reviewerEmail"]);
console.log(object4["returnPolicy"]);
console.log(object4["minimumOrderQuantity"]);
console.log(object4["meta"]["createdAt"]);
console.log(object4["meta"]["updatedAt"]);
console.log(object4["meta"]["barcode"]);
console.log(object4["meta"]["qrCode"]);
console.log(object4["images"][0]);
console.log(object4["thumbnail"]);