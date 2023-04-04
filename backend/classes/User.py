from classes.product import *
from enum import Enum

class Account:
    def __init__(self, email, password, status):
        self.email = email
        self.password = password
        self.status = status
        

class AccountStatus(Enum):
    ACTIVE = 1
    BLOCKED = 2
    BANNED = 3
    UNKNOWN = 4

class User:
    id_count = 0
    def __init__(self, name, phone, account):
        self.id = User.id_count
        self.name = name
        self.phone = phone
        self.accounts = account
        User.id_count += 1

    def verify_login(self, email, password):
        if self.account.email == email and self.account.password == password:
            return True
        else:
            return False

    def edit_profile(self):
        pass

class Customer(User):
    def __init__(self, name, phone, address = None):
        super().__init__(name, phone)
        self.address = address
        self.cart = Cart()

    def create_cart_item(self, product, quantity):
        self.cart.add_cart_item(product, quantity)

class Admin(User):
    def __init__(self, name, phone):
        super().__init__(name, phone)

    def add_product():
        pass

    def delete_product():
        pass

    

