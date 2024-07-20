export interface Dailyreport {
    bookingdate: string;
    bookingdatefrom: string;
    bookingdateto: string;
    transactionid: number;
    userid: number;
    email: string;
    airlinepnr: number;
    bookingstatus: string;
    paymentstatus: string;
    phonenumber: number;
    paymentgateway: string;
    journeydatefrom: string;
    journeydateto: string;
    transactiontype: string;
    triptype: string;
    bookingtype: string;
    payment: string;
    creditnotegenerated: string;
    invoicegenerated: string;
    ticketno: string;
    airline: {
        name: string;
        image: string;
    };
    refund: string;
    cancellationdate: string;
    cancellationdatefrom: string;
    cancellationdateto: string;
    segmentscount: string;
    pgname: string;
}

export interface CustomizableHeaders {
    bookingdate: boolean;
    bookingdatefrom: boolean;
    bookingdateto: boolean;
    transactionid: boolean;
    userid: number;
    email: boolean;
    airlinepnr: boolean;
    bookingstatus: boolean;
    paymentstatus: boolean;
    phonenumber: boolean;
    paymentgateway: boolean;
    journeydatefrom: boolean;
    journeydateto: boolean;
    transactiontype: boolean;
    triptype: boolean;
    bookingtype: boolean;
    payment: boolean;
    creditnotegenerated: boolean;
    invoicegenerated: boolean;
    ticketno: boolean;
    airline: boolean;
    refund: boolean;
    cancellationdate: boolean;
    cancellationdatefrom: boolean;
    cancellationdateto: boolean;
}
