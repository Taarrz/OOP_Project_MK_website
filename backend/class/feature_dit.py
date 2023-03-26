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


class Account:
    def __init__(self, Id, Email, Shipping_Address, Phone):
        self._Id = Id
        self._Email = Email
        self._Shipping_Address = Shipping_Address
        self._Phone = Phone 


class Order:
    def __init__(self, Shipping_Address, Total_Cost, Status, Payment_Status, User_Id):
        self._Shipping_Address = Shipping_Address
        self._Total_Cost = Total_Cost
        self._Status = Status
        self._Payment_Status = Payment_Status
        self._User_Id = User_Id
