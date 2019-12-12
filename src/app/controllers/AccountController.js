import Account from '../models/Account';
import User from '../models/User';

class AccountController {
  async show(req, res) {
    // const { id } = req.params;
    const user_id = req.userId;
    const account = await Account.findAll({
      where: { user_id },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'alias', 'email', 'birth', 'cpf'],
        },
      ],
    });
    return res.json(account);
  }
}

export default new AccountController();
