import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../user/entities/user.entity';
import { Strategy } from 'passport-jwt';

export interface JwtPayload {
  id: string;
}

function cookieExtractor(req: any): null | string {
  return req && req.cookies ? (req.cookies?.jwt ?? null) : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey:
        'j765r4*&YUIJB86t7yhlknb*&6t lb86t^Y)Nihvf8un ihgt6()UI)*&*GBLKM l iyu8t&IOPKNIHVBM:KJHou9hlk lojhoj l;kj08u78987t86tuiyblkm',
    });
  }

  async validate(payload: JwtPayload, done: (error, user) => void) {
    if (!payload || !payload.id) {
      return done(new UnauthorizedException(), false);
    }

    const user = await User.findOneBy({
      currentTokenId: payload.id,
    });

    if (!user) {
      return done(new UnauthorizedException(), false);
    }

    done(null, user);
  }
}
