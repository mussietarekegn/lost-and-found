from alembic import op
import sqlalchemy as sa

def upgrade():
    op.add_column('user', sa.Column('email', sa.String(length=254), nullable=False, unique=True))

def downgrade():
    op.drop_column('user', 'email')
