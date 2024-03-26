### Manual Install

## composer

```php
//app.php
"talium_attribute/laravel": "dev-main",
"repositories": [{
        "type": "path",
        "url": "./package/*"
}],

TaliumAttributes\Provider\TaliumAttributesServiceProvider::class

php artisan router-attribute:push
```
