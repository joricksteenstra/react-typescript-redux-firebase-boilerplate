import * as React from 'react';
import {connect} from "react-redux";
import {Button} from 'reactstrap';
import {bindActionCreators, Dispatch} from "redux";
import {setObjects} from "../actions/firebaseActions";
import ObjectModel from "../models/ObjectModel";
import {IApplicationState} from "../reducers";
import {FireBaseManager} from "../utils/firebase";
import './Overview.css';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

class Overview extends React.Component<any, any> {
    public fetchObjects = (): void => {
        FireBaseManager.getFireStoreReference('objects')
            .onSnapshot((querySnapshot: QuerySnapshot) => {
                const objects: ObjectModel[] = [];
                querySnapshot.forEach((doc) => {
                    const name:string  = doc.data().name;
                    const objectModel = new ObjectModel();
                    objectModel.name = name;
                    objects.push(objectModel);
                });
                this.props.setObjects(objects);
            });
    };

    public componentDidMount() {
        this.fetchObjects();
    }

    public addObjects = (): void => {
        const objectModel = new ObjectModel();
        objectModel.name = 'test';

        FireBaseManager.getFireStoreReference('objects').add(Object.assign({}, objectModel));
    };

    public render() {
        return (
            <div>
                <Button onClick={this.addObjects} color="danger">Danger!</Button>
                <div className="Overview-container">
                    <ul>
                        {this.props.objects && this.props.objects.map((object: InterfaceObjectModel) => (
                                <li key={object.name}> {object.name}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

const actions = (dispatch: Dispatch) => bindActionCreators({
    setObjects,
}, dispatch);

const state = (s: IApplicationState) => ({
    objects: s.firebaseReducer.get('objects')
});

export default connect(
    state,
    actions
)(Overview);
