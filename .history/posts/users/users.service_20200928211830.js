// mongoose congiratiuation


module.exports = {
  getUsers(body, callback) {
    
    try {
      const mongooseData = await get(monogg);
      
      callback(mongooseData)
    } catch (e) {
      callback(e);
    }


  }
}