import * as firebase from "firebase";
import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setReservations} from "../actions/firebaseActions";
import {FireBaseManager} from "../utils/firebase";
import QuerySnapshot = firebase.firestore.QuerySnapshot;

class Overview extends React.Component<any, any> {
    public _fetchReservations = () => {
        FireBaseManager.getFireStoreReference('reservations')
            .onSnapshot((querySnapshot: QuerySnapshot) => {
                const reservations: any[] = [];
                querySnapshot.forEach((doc) => {
                    reservations.push(doc.data());
                });
                this.props.setReservations(reservations);
            });
    };

    public componentDidMount() {
        this._fetchReservations();
    }

    public _addReservation(): void {
        FireBaseManager.getFireStoreReference('reservations').add({
            test: '123'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this._addReservation}>Klik hier voor meer!</button>
                <ul>
                    {this.props.reservations && this.props.reservations.map((reservation: any) => (
                            <li key={reservation.test}> {reservation.test}</li>
                        )
                    )}
                </ul>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({setReservations}, dispatch);
}

function mapStateToProps(state: any) {
    return {reservations: state.firebaseReducer.reservations};
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
