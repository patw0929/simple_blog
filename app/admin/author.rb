ActiveAdmin.register Author do
  permit_params :email, :name

  index do
    column :email
    column :name
    column :current_sign_in_at
    column :last_sign_in_at
    column :sign_in_count
    actions
  end

  form do |f|
    f.input :email
    f.input :name
    actions
  end
end
