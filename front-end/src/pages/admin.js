import React, { Component } from 'react';




class AdminPage extends Component {
 


    render () {
        return(
            <React.Fragment>
                <form className='create-event'>
                    <div className='form-row'>
                        <div className='form-group col-md-12 create-event-header'>
                            <h1>Create event</h1>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label for='inputEventTitle'>Company Title:</label>
                            <input type='text' className='form-control' id='inputEventTitle' placeholder='Event Title'></input>
                        </div>
                        <div className='form-group col-md-6'>
                            <label for='inputDate'>Date:</label>
                            <input type='datetime-local' className='form-control' id='inputDate' placeholder='date'></input>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-12'>
                            <label for='eventDescription'>event Description:</label>
                            <textarea type='text' className='form-control' id='eventDescription' placeholder='Event Description'></textarea>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-6'>
                            <label for='inputPrice'>Price:</label>
                            <input type='number' className='form-control' id='inputPrice' placeholder='99.99'></input>
                        </div>
                        <button type='submit' className='btn btn-primary col-md-6'>Submit</button>
                    </div>
                </form>
                <form className='create-company'>
                    <div className='form-row'>
                        <div className='form-group col-md-12 create-company-header'>
                            <h1>Create company</h1>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-12'>
                            <label for='companyTitle'>Company title:</label>
                            <input type='text' className='form-control' id='companyTitle' placeholder='company title'></input>
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='form-group col-md-12'>
                            <label for='comapnyDescription'>Description:</label>
                            <textarea type='text' className='form-control' id='companyDescription' placeholder='company description'></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary col-md-12'>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AdminPage;