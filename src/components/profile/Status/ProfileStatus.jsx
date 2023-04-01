import React, {useState} from "react";
import s from "./../profile.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () =>{

        this.setState({

            editMode:true
        })
    }
    onStatusChange =(e)=>{
        this.setState({
            status:e.currentTarget.value,
        })
    }
    disableEditMode = () =>{
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status,
            })
        }

    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disableEditMode}  value={this.state.status} type="text"/>
                    </div>
                }

            </div>
        )
    }
}

//
// let ProfileStatus = (props) => {
//     const [editMode, setEditMode] = useState(true)
//     let buttonHandler = () => {
//         setEditMode((current) => !current)
//     }
//     return (
//         <div>
//             {!editMode &&
//                 <div>
//                     <span onDoubleClick={buttonHandler}>{props.status}</span>
//                 </div>
//             }
//             {editMode &&
//                 <div>
//                     <input onDoubleClick={buttonHandler} value={props.status} type="text"/>
//                 </div>
//             }
//         </div>
//     )
// }
export default ProfileStatus