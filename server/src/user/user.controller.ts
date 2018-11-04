import { Body, Controller, HttpException, HttpStatus, Post, Get, Query, Param, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiUseTags, ApiOkResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { ApiException } from '../shared/api-exception.model';
import { GetOperationId } from '../shared/utilities/get-operation-id.helper';
import { User } from './models/user.model';
import { LoginResponseVm } from './models/view-models/login-response-vm.model';
import { LoginVm } from './models/view-models/login-vm.model';
import { RegisterVm } from './models/view-models/register-vm.model';
import { UserVm } from './models/view-models/user-vm.model';
import { UserService } from './user.service';
import { isArray, map } from 'lodash';
import { TodoLevel } from 'todo/models/todo-level.enum';
import { ToBooleanPipe } from 'shared/pipes/to-boolean.pipe';

@Controller('user')
@ApiUseTags(User.modelName)
export class UserController {
    constructor(private readonly _userService: UserService) {}

    @Post('register')
    @ApiCreatedResponse({ type: UserVm })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'Register'))
    async register(@Body() vm: RegisterVm): Promise<UserVm> {
        const { username, password } = vm;

        if (!username) {
            throw new HttpException('Username is required', HttpStatus.BAD_REQUEST);
        }

        if (!password) {
            throw new HttpException('Password is required', HttpStatus.BAD_REQUEST);
        }

        let exist;
        try {
            exist = await this._userService.findOne({ username });
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (exist) {
            throw new HttpException(`${username} exists`, HttpStatus.BAD_REQUEST);
        }

        const newUser = await this._userService.register(vm);
        return this._userService.map<UserVm>(newUser);
    }

    @Post('login')
    @ApiCreatedResponse({ type: LoginResponseVm })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'Login'))
    async login(@Body() vm: LoginVm): Promise<LoginResponseVm> {
        const fields = Object.keys(vm);
        fields.forEach(field => {
            if (!vm[field]) {
                throw new HttpException(`${field} is required`, HttpStatus.BAD_REQUEST);
            }
        });

        return this._userService.login(vm);
    }
    @Get('GetAllUsers')
    // @Roles(UserRole.Admin, UserRole.User)
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiOkResponse({ type: UserVm, isArray: true })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'GetAll'))
    // @ApiImplicitQuery({ name: 'level', enum: EnumToArray(TodoLevel), required: false, isArray: true })
    // @ApiImplicitQuery({ name: 'isCompleted', required: false })
    async get(): Promise<UserVm[]> {
        try {
            const users = await this._userService.findAll();
            return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('filterByAge')
    // @Roles(UserRole.Admin, UserRole.User)
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiOkResponse({ type: UserVm, isArray: true })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'filterByAge'))
    @ApiImplicitQuery({ name: 'userAge', required: false})
    @ApiImplicitQuery({ name: 'oper', required: false })
    @ApiImplicitQuery({ name: 'asc', required: false })
    async filterByAge(
        @Query('userAge') userAge: number,
        @Query('oper') oper: string,
        @Query('asc') asc: boolean,
        ): Promise<UserVm[]> {
        try
        {
            if (oper === 'lt')
            {
               const users = await this._userService.findAll({age: {$lt: userAge }});
               return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
            }

            else if (oper === 'lte')
             {
                const users = await this._userService.findAll({age: {$lte: userAge }});
                return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
             }
             else if (oper === 'gt')
             {
                 const users = await this._userService.findAll({age: {$gt: userAge }});
                 return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
            }
             else if (oper === 'gte')
             {
                 const users = await this._userService.findAll({age: {$gte: userAge }});
                 return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
            }
             else if (oper === 'eq')
             {
                 const users = await this._userService.findAll({age: {$eq: userAge }});
                 return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
            }
             else if (oper === 'ne')
             {
                 const users = await this._userService.findAll({age: {$ne: userAge }});
                 return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
            }

            // return this._userService.map<UserVm[]>(map(users, user => user.toJSON()));
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Get('userById')
    // @Roles(UserRole.Admin, UserRole.User)
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiOkResponse({ type: UserVm, isArray: true })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'userById'))
    @ApiImplicitQuery({ name: 'userId', required: false})
    async userById(
        @Query('userId') userId: string,
        ): Promise<User> {
        try
        {
            const user = await this._userService.findById(userId);
            return user;
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('delete')
    // @Roles(UserRole.Admin)
    // @UseGuards(AuthGuard('jwt'), RolesGuard)
    @ApiOkResponse({ type: UserVm })
    @ApiBadRequestResponse({ type: ApiException })
    @ApiOperation(GetOperationId(User.modelName, 'delete'))
    async delete(@Param('id') id: string): Promise<UserVm> {
        try {
            const deleted = await this._userService.delete(id);
            return this._userService.map<UserVm>(deleted.toJSON());
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
