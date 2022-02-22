module.exports.getDuration = async (meter_no) => {
    try {
        return new Promise(async (resolve, reject) => {
            if (process.env.ssh_host != 'localhost') {
                con = await mysql.mysqlConnection;
            }
            let sql = `SELECT duration FROM meter_parameters where meter_number = '${meter_no}'`
            con.query(sql, async function (error, result) {
                if (error) {
                    console.info('DB error' + error);
                    reject({ 'status': false });
                } else {
                    if (result.length >= 1) {
                        resolve({ 'status': true, 'duration': result[0].duration });
                    } else {
                        resolve({ 'status': false });
                    }
                }
            });
        }).catch((error) => {
            console.info(error);
        })
    } catch (error) {
        console.info(error);
    }
}