from typing import Union
import jsons
from fastapi import FastAPI
from classes.system import MkDelivery
from classes.User import *
from classes.product import *
app = FastAPI()

mk = MkDelivery()

mk.add_user(Customer("Ohm","0994448535","Japan",Account("ohm@gmail.com","123456")))
mk.add_user(Admin("Tar","0945453453",Account("Tar@gmail.com","654321")))

mk.add_category(ProductCategory("โปรโมชั่น","https://www.mk1642.com/getattachment/b4991225-a5e5-49b5-afe0-f7bf12af9316/Promotion.aspx"))
mk.add_category(ProductCategory("จานเดี่ยว","https://www.mk1642.com/getattachment/14c574d8-4a19-4c9e-8d8f-63dd3c242acf/SingleDish.aspx"))
mk.add_category(ProductCategory("ชุดสุดคุ้ม","https://www.mk1642.com/getattachment/deceefa7-18a7-472e-9a12-b77e0b00fba9/SetMeal.aspx"))
mk.add_category(ProductCategory("สุกี้สด","https://www.mk1642.com/getattachment/f74b6557-aee1-4e91-92a6-4bfa667055bf/FreshSuki.aspx"))
mk.add_category(ProductCategory("เป็ดย่างและอื่นๆ","https://www.mk1642.com/getattachment/58c0b8fd-dde5-4dff-abb1-237282a9b029/Roasted.aspx"))
mk.add_category(ProductCategory("ของทานเล่น","https://www.mk1642.com/getattachment/088a99da-359d-4738-8443-d82b47f2f803/Snack.aspx"))
mk.add_category(ProductCategory("น้ำและขนม","https://www.mk1642.com/getattachment/ba27379d-f481-4a4d-890f-988891b43628/Dessert.aspx"))
mk.add_category(ProductCategory("สแน็คบ็อกซ์และจัดเลี้ยง","https://www.mk1642.com/getattachment/da4c1a0b-ba1d-474d-b56f-fec0e9e7541f/SnackBox.aspx"))

mk.category("โปรโมชั่น").add_product(Product("Summer Freedom 499","https://www.mk1642.com/getattachment/f2af6d3f-b7aa-40bd-8de1-e2ee113575de/4131.aspx",499,"เลือกได้ 10 เมนูเลย","490","ชุด4คน"))
mk.category("โปรโมชั่น").add_product(Product("Summer Freedom 799","https://www.mk1642.com/getattachment/f2af6d3f-b7aa-40bd-8de1-e2ee113575de/4131.aspx",499,"เลือกได้ 10 เมนูเลย","490","ชุด4คน"))
mk.category("จานเดี่ยว").add_product(Product("ยำวุ้นเส้น","https://www.mk1642.com/getmetafile/07e6d178-aa21-48cb-95c9-49553070e258/%e0%b8%a2%e0%b8%b3%e0%b8%a7%e0%b8%b8%e0%b9%89%e0%b8%99%e0%b9%80%e0%b8%aa%e0%b9%89%e0%b8%99%e0%b8%97%e0%b8%b0%e0%b9%80%e0%b8%a5_419x260.aspx?maxsidesize=1900",139,"แซ่บมากๆ","150","ยำ"))


mk.category("โปรโมชั่น").get_product()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/category_product/{product_name}")
def read_product(product_name: str):
    return {"product_name": product_name, }

@app.post("/category_product")
async def get_category_product(data:dict)->dict:
    name_d = data["name"]
    product_list = mk.category(name_d).get_product()
    dt = {}
    dt[name_d] = product_list
    return dt

@app.post("/register")
async def register(data:dict)->dict:
    email_d = data["email"]
    password_d = data["password"]
    name_d = data["name"]
    phone_d = data["phone"]
    mk.add_user(User(name_d, phone_d, Account(email_d, password_d)))
    user = mk.user(name_d)
    dt = {}
    dt[user.id] = user
    return {"Data": dt}
