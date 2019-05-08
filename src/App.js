import React from 'react';

class App extends React.Component{


    members=[
        {
          id:[1,2,3,4],
        },
        {
            id:1,
            highschool:'not reported',
            university:'not reported',
            degree:0
        },

       {
           id:2,
            highschool:'not reported',
            university:'not reported',
            degree:0
        },
        {
            id:3,
            highschool:'not reported',
            university:'not reported',
            degree:0
        },
        {
            id:4,
            highschool:'not reported',
            university:'not reported',
            degree:0
        }];


        state={
            id:0,
            member:false,
            show:false,
            add:false
        };


        OnChange=(e)=> {
            let id=e.target.value;
            this.setState({id});
            this.setState({add: false});
            this.setState({show: false});
        };

        Show=()=>{
                this.setState({add: false});
                this.setState({show: true});
        };

        Add=()=>{
            this.setState({add: true});
            this.setState({show: false});
        };

        //add kardane report
       ChangeSchool=(e)=>{
        let school=e.target.value;
        this.members[this.state.id].highschool=school;
       }

       ChangeUniversity=(e)=>{
        let university=e.target.value;
        this.members[this.state.id].university=university;
       }

       ChangeDegree=(e)=>{
        let degree=e.target.value;
        this.members[this.state.id].degree=degree;
       }

       Submit=()=>{
         this.setState({add: false});
         this.setState({show: false});
         alert('report added successfully')
       }

       //remove kardane report
       Remove=()=>{
        this.members[this.state.id].highschool='not reported';
        this.members[this.state.id].university='not reported';
        this.members[this.state.id].degree=0;
        this.setState({add: false});
        this.setState({show: false});
        alert('report removed successfully')
    }

  render() {
    return (
        <div>
            <p>Enter the ID</p>
            <input onChange={this.OnChange}/>
            <button onClick={this.Show}>show reports of this ID</button>
            <button onClick={this.Add}>add report of this ID</button>
            <button onClick={this.Remove}>remove reports of this ID</button>
            <hr/>

            {this.state.show && <div>
                <p>highschool:{this.members[this.state.id].highschool}</p>
                <p>university:{this.members[this.state.id].university}</p>
                <p>degree:{this.members[this.state.id].degree}</p>
            </div>}

            {this.state.add && <div>
                <p>highschool:</p>
                <input onChange={this.ChangeSchool}/>
                <p>university:</p>
                <input onChange={this.ChangeUniversity}/>
                <p>degree:</p>
                <input onChange={this.ChangeDegree}/><br/>
                <button onClick={this.Submit}>submit</button>
                              </div>}
        </div>
    );
  }
}


export default App;
