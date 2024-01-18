import {
    Body, Controller, Get, Param,
    Post, Patch, Delete, Query,
} from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(@Query('role') role?: Role) {
        return this.usersService.findAll(role)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post()
    create(@Body() user: User) {
        return this.usersService.create(user)
    }

    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() user: OptionalUser) {
        return this.usersService.updateOne(+id, user)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.usersService.deleteOne(+id)
    }
}
