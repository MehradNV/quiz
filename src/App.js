import React from 'react';
import Report from './Components/Report'
class App extends React.Component{


    id1= {
            highschool:'',
            university:'',
            degree:0
        };

    id2={
            highschool:'',
            university:'',
            degree:0
        };
        id3=
        {
            highschool:'',
            university:'',
            degree:0
        };


        state={
            highschool:'',
            university:'',
            degree:0
        }


        Change=(e)=> {
            let id = e.target.value;
            let highschool = e.target.value;
            let university = e.target.value;
            let degree = e.target.value;

            this.setState({highschool:highschool})
            this.setState({university:university})
            this.setState({degree:degree})

        };



  render() {
    return (
        <div>

            <form >
                <p>id</p>
                <input id='id' onChange={this.Change}/>
                <p>highschool</p>
                <input id='highschool' onChange={this.Change}/>
                <p>university</p>
                <input id='university' onChange={this.Change}/>
                <p>degree</p>
                <input id='degree' onChange={this.Change}/>
                <button >submit</button>
            </form>
            <Report reports={this.state}/>
        </div>
    );
  }
}


export default App;
