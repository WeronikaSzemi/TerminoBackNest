import { Injectable } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Response } from 'express';
import { User } from '../user/entities/user.entity';
import { compare } from 'bcrypt';
import { JwtPayload } from './jwt.strategy';
import { sign } from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await User.findOneBy({
        email: req.email,
      });

      const match = await compare(req.pwd, user.hash);

      if (!match) {
        return res.json(false);
      }
      const token = await this.createToken(await this.generateToken(user));

      return res
        .cookie('jwt', token.accessToken, {
          secure: false,
          domain: 'localhost',
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 1000,
        })
        .status(200)
        .json({
          result: true,
          userId: user.userId,
        });
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  private createToken(currentTokenId: string): {
    accessToken: string;
    expiresIn: number;
  } {
    const payload: JwtPayload = { id: currentTokenId };
    const expiresIn = 60 * 60 * 24;
    const accessToken = sign(
      payload,
      'j765r4*&YUIJB86t7yhlknb*&6t lb86t^Y)Nihvf8un ihgt6()UI)*&*GBLKM l iyu8t&IOPKNIHVBM:KJHou9hlk lojhoj l;kj08u78987t86tuiyblkm',
      { expiresIn },
    );
    return {
      accessToken,
      expiresIn,
    };
  }

  private async generateToken(user: User): Promise<string> {
    let token;
    let userWithThisToken = null;

    do {
      token = uuid();
      userWithThisToken = await User.findOneBy({ currentTokenId: token });
    } while (!!userWithThisToken);

    user.currentTokenId = token;

    await user.save();

    return token;
  }

  async logout(user: User, res: Response) {
    try {
      user.currentTokenId = null;

      await user.save();

      res.clearCookie('jwt', {
        secure: false,
        domain: 'localhost',
        httpOnly: true,
      });

      return res.json(true);
    } catch (e) {
      return res.json({ error: e.message });
    }
  }

  async checkIfLoggedIn(id: string, res: Response) {
    const found = await User.findOneBy({
      userId: id,
    });

    if (!found) {
      return res.json({
        result: false,
        message: 'Nie znaleziono takiego_ej użytkownika_czki.',
      });
    }

    if (found.currentTokenId === null) {
      return res.json({
        result: false,
        message: 'Użytkownik_czka niezalogowany_a.'
      })
    } else {
      return res.json({
        result: true,
        userId: found.userId,
      })
    }
  }
}
