from order import*
class Addmin:
    def __init__(self, Id, Name, Email):
        self._Id = Id
        self._Name = Name
        self._Email = Email


class User:
    def __init__(self, Id, Password, Status):
        self._Id = Id
        self._Password = Password
        self._Status = Status
        self._Account = Account
        self._Order = []
        self.product = []
        
    def add_product(self, product):
        self.product.append(product)

    def cancel_order(self,order) :
        if(self._Status=="CONFIRM"):
            self._Status="CANCELED"
            print("Order Canceled")
            Payment.return_payment(self)
        else :
            print("error ja")


class Account:
    def __init__(self, Id, Email, Shipping_Address, Phone):
        self._Id = Id
        self._Email = Email
        self._Shipping_Address = Shipping_Address
        self._Phone = Phone 
