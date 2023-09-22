function showContact() {
    const contents = document.getElementById('content')
    
    
    contents.innerHTML = `
        <div class="container">
            <div class="contacts">
                <ul class="contacts-info">
                    <li><i class="fa fa-phone"></i>(222)-888 5555</li>
                    <li><i class="fa fa-location-arrow"></i>1024 Oakwood Ave San Diego, CA 22434</li>
                    <li><i class="fa fa-clock"></i>Mon-Thurs:8am-8pm Fri-Sun:8am-11pm</li>
                </ul>
                <form>
                    <h1>Message us!</h1>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email">
                    </div>
                    <h3>Your Message:</h3>
                    <div class="form-group">
                        <textarea></textarea>
                    </div>
                    <input type="submit">
                </form>
                
            </div>  
        </div>
    `
    
}

export default showContact 