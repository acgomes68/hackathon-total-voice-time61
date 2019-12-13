import * as Yup from 'yup';
import Entry from '../models/Entry';
import Account from '../models/Account';
import Provider from '../models/Provider';
import ProviderType from '../models/ProviderType';

class EntryController {
  async index(req, res) {
    const user_id = req.userId;
    const entries = await Entry.findAll({
      include: [
        {
          model: Account,
          as: 'account',
          attributes: ['current_balance'],
          where: { user_id },
        },
        {
          model: Provider,
          as: 'provider',
          attributes: ['name'],
          include: [
            {
              model: ProviderType,
              as: 'provider_type',
              attributes: ['name'],
            },
          ],
        },
      ],
    });
    return res.json(entries);
  }

  async show(req, res) {
    const { id } = req.params;
    const user_id = req.userId;
    const entry = await Entry.findByPk(id, {
      include: [
        {
          model: Account,
          as: 'account',
          attributes: ['current_balance'],
          where: { user_id },
        },
        {
          model: Provider,
          as: 'provider',
          attributes: ['name'],
        },
      ],
    });
    return res.json(entry);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      account_id: Yup.number().required(),
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
      value: Yup.number().required(),
      entry_type: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const account = await Account.findByPk(req.body.account_id);

    if (!account) {
      return res.status(400).json({ error: 'Account does not exist' });
    }

    const provider = await Provider.findByPk(req.body.provider_id);

    if (!provider) {
      return res.status(400).json({ error: 'Provider does not exist' });
    }

    const {
      id,
      account_id,
      owner,
      provider_id,
      description,
      barcode,
      date,
      value,
      penalty,
      rate,
      discount,
      entry_type,
    } = await Entry.create(req.body);

    const { current_balance } = account;

    account.current_balance =
      entry_type === 'D' ? current_balance - value : current_balance + value;

    account.save();

    return res.json({
      id,
      account_id,
      owner,
      provider_id,
      description,
      barcode,
      date,
      value,
      penalty,
      rate,
      discount,
      entry_type,
    });
  }
}

export default new EntryController();
