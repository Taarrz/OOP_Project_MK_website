class Order:
    def __init__(self, Shipping_Address, Total_Cost, Status, Payment_Status, User_Id):
        self._Shipping_Address = Shipping_Address
        self._Total_Cost = Total_Cost
        self._Status = Status
        self._Payment_Status = Payment_Status
        self._User_Id = User_Id
