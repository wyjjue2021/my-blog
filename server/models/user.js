const db = require('../config/db')
const Sequelize = db.sequelize;
const User = Sequelize.import('../schema/user');

class UserModel {

  /**
   * 查询取文章详情数据
   * @param id  文章ID
   * @returns {Promise<Model>}
   */
  static async getUserDetail(username, password) {
      return await User.findOne({
          where: {
            username,
            password
          },
      })
  }
}
module.exports = UserModel