from backend.models.payment import payment


class Order(payment):
    def __init__(self, Total_Cost, Order_Status, Payment_Status, account,Transaction_id=None):
        self._Shipping_Address = account._Shipping_Address
        self._Total_Cost = Total_Cost
        self._Order_Status = Order_Status
        self._Payment_Status = Payment_Status
        self._User_Id = account._Id
        payment.Transaction_id=Transaction_id

    def __str__(self):
        return self._User_Id