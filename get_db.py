from peewee import *

psql_db = PostgresqlDatabase('lxndrvn', user='lxndrvn')


class BaseModel(Model):

    class Meta:
        database = psql_db


class Boards(BaseModel):
    title = CharField()


class Cards(BaseModel):
    title = CharField()
    content = CharField()
    board_title = ForeignKeyField(Boards, related_name='boards_list')
