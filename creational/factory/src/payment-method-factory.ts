import PaymentType from "../enums/payment-type";
import IPaymentMethod from "./payment-method.interface";
import MasterCard from "./types/MasterCard";
import PayPal from "./types/PayPal";
import Visa from "./types/Visa";

export default class PaymentMethodFactory {
    public static createPaymentType(type: PaymentType): IPaymentMethod {
        const selecter = {
            [PaymentType.Mastercard]: new MasterCard(),
            [PaymentType.PayPal]: new PayPal(),
            [PaymentType.Visa]: new Visa()
        };

        if (!selecter[PaymentType]) throw new Error('Invalid payment method type.');

        return selecter[PaymentType];
    }
}
