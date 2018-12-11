import * as React from 'react';
import './App.css';

class App extends React.Component {

    getReservations() {
        // database.collection("reservations")
        //     .onSnapshot(function(querySnapshot: QuerySnapshot) {
        //         querySnapshot.forEach(function(doc) {
        //             console.log(doc.data())
        //         });
        //     });

    }


    public onClick(): void {
        // db.collection('reservations').add({
        //     test: 'test'
        // }).then(() => console.log('test'))
    };

    public render() {
        return (
                <div className="App">

                    <button onClick={this.onClick}>Test</button>
                </div>
        );
    }
}

export default App;
