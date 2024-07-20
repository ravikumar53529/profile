export interface ConsolidatedData {
    transactionid: number;
    consolidatedview: [
        {
            TransactionDetails: {
                BookingID: number;
                CustomerName: string;
                DateandTime: string;
                FlightNumber: string;
                DepatureAirport: string;
                ArrivalAirport: string;
                BookingReference: string;
                TransactionStatus: string;
                DepatureDate: string;
                AirvalDate: string;
                PassengerName: string;
                PassengerAge: string;
                PassengerSeatNumber: string;
            };
        },
        {
            FlightDetails: {
                FlightNumber: string;
                DepatureAirport: string;
                ArrivalAirport: string;
                DepatureDate: string;
                ArrivalDate: string;
                FlightDuration: string;
                AircraftType: string;
                Class: string;
                AvailableSeats: string;
                TicketPrice: string;
            };
        },
        {
            CancellationDetails: {
                transactionId: string;
                FlightNumber: string;
                DepatureAirport: string;
                ArrivalAirport: string;
                DepatureDate: string;
                ArrivalDate: string;
                FlightDuration: number;
                AircraftType: string;
                Class: string;
                AvailableSeats: number;
                TicketPrice: number;
                status: string;
                cancellationReason: string;
            };
        },
        {
            PassengerDetails: {
                Age: number;
                Name: string;
                DOB: string;
                Gender: string;
                PassportId: string;
                SeatSelection: string;
            };
        },
        {
            PaymentDetails: {
                PaymentDate: string;
                Ticketprice: number;
                Taxesandfeeperticket: number;
                ToatalAmount: number;
                PaymnetMethod: string;
                Paymnetstatus: string;
                TransactionID: number;
                Paymnetgateway: string;
                currency: string;
                AccountDetails: string;
                cardholdername: string;
            };
        },
        {
            RefundDetails: {
                TransactionId: number;
                FlightNumber: string;
                DepatureAirport: string;
                AirvalAirport: string;
                DepatureDate: string;
                ArrivalDate: string;
                FlightDuration: number;
                AircraftType: string;
                Class: string;
                Status: string;
                RefundAmount: number;
                Reason: string;
            };
        },
        {
            ContactDetails: {
                EmailID: string;
                PhoneNumber: number;
                EmergencyContactNumber: number;
                BookingReference: number;
                TravelInsurance: string;
            };
        },
        {
            CommissionDetails: {
                AgentName: string;
                Id: number;
                Amount: number;
                CommissionAmount: number;
                Fullname: string;
                Email: string;
                Phonenumber: string;
                FlightNumber: string;
                DepatureCity: string;
                ArrivalCity: string;
                DepatureTime: string;
                ArrivalTime: string;
                DateOfTravel: string;
                Class: string;
                Seat: string;
                TicketNumber: number;
                Barcode: number;
                TotalFare: number;
                Taxesandfees: number;
                BookingReference: number;
                BaggageAllowance: number;
                AirlineName: string;
                MethodOfPayment: string;
                TotalCostOftheTickect: number;
            };
        },
        {
            TransactionHistory: {
                BookingId: number;
                PNR: number;
                FlightNumber: string;
                DepatureAirport: string;
                ArrivalAirport: string;
                DepatureDate: string;
                AirvalDate: string;
                FlightDuration: number;
                AircraftType: string;
                Class: string;
                Status: string;
                PassengerName: string;
                BookingDate: string;
                BokingTime: string;
                TransactionalStatus: string;
            };
        }
    ];
}
