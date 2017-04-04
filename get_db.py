from peewee import *

psql_db = PostgresqlDatabase(database_name, user=database_user)


class BaseModel(Model):

    class Meta:
        database = db


class Boards(BaseModel):

    title = CharField()


class Cards(BaseModel):

    title = CharField()
    board_title = ForeignKeyField(Boards, related_name='boards_list')
